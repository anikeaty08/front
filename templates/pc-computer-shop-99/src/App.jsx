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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white font-medium text-lg tracking-tighter flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-neutral-800 to-neutral-700 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors duration-300">
<span className="iconify text-white" data-icon="lucide:cpu" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
                PC COMPUTER SHOP
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Components</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Pre-Built</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Laptops</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Services</a>
</div>

<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="relative text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
</button>
<button className="md:hidden text-neutral-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-6">
<div className="max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-400 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New RTX 4090 Series Stock Available
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent pb-2">
                Architecting Your<br/>Digital Reality.
            </h1>
<p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Premium custom workstations and high-performance gaming rigs. 
                Experience the intersection of raw power and minimalist design.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    Shop Pre-Builts
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="h-10 px-6 rounded border border-neutral-800 text-neutral-300 font-medium text-sm hover:bg-neutral-900 transition-colors">
                    Build Custom PC
                </button>
</div>

<div className="mt-20 relative max-w-5xl mx-auto group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
<div className="relative rounded-lg overflow-hidden border border-white/10 bg-neutral-900 hero-glow">
<img alt="High End PC" className="w-full h-[400px] md:h-[600px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1">Featured Build</p>
<h3 className="text-xl text-white font-medium tracking-tight">Obsidian Pro Workstation</h3>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs text-neutral-600 mb-8 font-medium">POWERED BY INDUSTRY LEADERS</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">

<div className="flex items-center gap-2"><span className="iconify" data-icon="simple-icons:nvidia" data-width="24"></span> <span className="font-bold text-lg tracking-tight">NVIDIA</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="simple-icons:intel" data-width="24"></span> <span className="font-bold text-lg tracking-tight">INTEL</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="simple-icons:amd" data-width="24"></span> <span className="font-bold text-lg tracking-tight">AMD</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="simple-icons:asus" data-width="24"></span> <span className="font-bold text-lg tracking-tight">ASUS</span></div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Curated Hardware</h2>
<p className="text-neutral-500">Top-tier components selected for performance.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors" href="#">
                    View all parts <span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 glass-card rounded-xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<span className="px-2 py-1 rounded border border-white/10 bg-black/20 text-xs text-neutral-300">New Arrival</span>
<h3 className="text-2xl text-white font-medium tracking-tight mt-4">GeForce RTX 4090 OC</h3>
<p className="text-neutral-500 mt-2 text-sm max-w-xs">The ultimate platform for gamers and creators. Powered by GeForce RTX 40 Series.</p>
</div>
<img alt="GPU" className="absolute -right-10 bottom-0 w-80 rotate-12 opacity-60 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500" src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="glass-card rounded-xl p-8 relative overflow-hidden group hover:border-neutral-700 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex-1 flex items-center justify-center">
<span className="iconify text-neutral-600 group-hover:text-indigo-500 transition-colors duration-300" data-icon="lucide:cpu" data-width="64" style={{strokeWidth: '1'}}></span>
</div>
<div>
<h3 className="text-lg text-white font-medium">Processors</h3>
<p className="text-sm text-neutral-500">Intel Core &amp; AMD Ryzen</p>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-8 relative overflow-hidden group hover:border-neutral-700 transition-colors">
<img alt="Monitor" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1527443224372-77886b876cd8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-end">
<div>
<h3 className="text-lg text-white font-medium">Peripherals</h3>
<p className="text-sm text-neutral-500">Monitors, Keyboards &amp; Mice</p>
</div>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-xl p-8 relative overflow-hidden group">
<img alt="Setup" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&amp;w=2531&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-center max-w-sm">
<h3 className="text-2xl text-white font-medium tracking-tight">Custom Water Cooling</h3>
<p className="text-neutral-400 mt-2 text-sm">Keep your temperatures low and framerates high with our expert custom loop services.</p>
<button className="mt-6 w-fit text-sm text-white border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">Configure Loop</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-xl font-medium text-white tracking-tight mb-8">Latest Inventory</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative">
<div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden border border-white/5 mb-4 relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '2'}}></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-200">Mech Keyboard Pro</h3>
<p className="text-xs text-neutral-500 mt-1">Wireless, RGB, Tactile</p>
</div>
<span className="text-sm font-medium text-neutral-300">$149</span>
</div>
</div>

<div className="group relative">
<div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden border border-white/5 mb-4 relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '2'}}></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-200">Ergo Mouse X1</h3>
<p className="text-xs text-neutral-500 mt-1">16k DPI, Ultralight</p>
</div>
<span className="text-sm font-medium text-neutral-300">$89</span>
</div>
</div>

<div className="group relative">
<div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden border border-white/5 mb-4 relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" src="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '2'}}></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-200">NZXT Kraken Z73</h3>
<p className="text-xs text-neutral-500 mt-1">360mm AIO Cooler</p>
</div>
<span className="text-sm font-medium text-neutral-300">$279</span>
</div>
</div>

<div className="group relative">
<div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden border border-white/5 mb-4 relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '2'}}></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-200">RTX 3060 Vision</h3>
<p className="text-xs text-neutral-500 mt-1">12GB GDDR6 White</p>
</div>
<span className="text-sm font-medium text-neutral-300">$329</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-900/30">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl text-white font-medium tracking-tight mb-8 text-center">Quick System Configurator</h2>
<div className="glass-card p-8 rounded-xl space-y-8">

<div>
<div className="flex justify-between text-sm mb-4">
<span className="text-white">Budget Range</span>
<span className="text-indigo-400 font-medium">$1,500 - $3,000</span>
</div>
<div className="relative w-full h-1 bg-neutral-800 rounded-full">
<div className="absolute left-[20%] right-[30%] h-full bg-indigo-500 rounded-full"></div>
<div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-950 border-2 border-indigo-500 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
<div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-950 border-2 border-indigo-500 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>

<div>
<p className="text-sm text-white mb-4">Primary Use Case</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-800 bg-neutral-900 peer-checked:border-indigo-500/50 peer-checked:bg-indigo-500/10 transition-all">
<div className="w-4 h-4 rounded border border-neutral-600 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center">
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-width="10"></span>
</div>
<span className="text-sm text-neutral-400 peer-checked:text-white">Gaming &amp; Streaming</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-800 bg-neutral-900 peer-checked:border-indigo-500/50 peer-checked:bg-indigo-500/10 transition-all">
<div className="w-4 h-4 rounded border border-neutral-600 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center">
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-width="10"></span>
</div>
<span className="text-sm text-neutral-400 peer-checked:text-white">3D Rendering &amp; CAD</span>
</div>
</label>
</div>
</div>
<button className="w-full py-3 bg-white text-black font-medium text-sm rounded hover:bg-neutral-200 transition-colors">
                    Find Compatible Builds
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 px-6 bg-black">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-white font-medium text-sm tracking-tighter flex items-center gap-2 mb-4" href="#">
<span className="iconify text-indigo-500" data-icon="lucide:cpu" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        PC COMPUTER SHOP
                    </a>
<p className="text-neutral-500 text-xs leading-relaxed max-w-xs">
                        Defining the standard for custom computing. Built with precision, designed for enthusiasts.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Shop</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Pre-Built PCs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Components</a></li>
<li><a className="hover:text-white transition-colors" href="#">Peripherals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Clearance</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Support</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Order Status</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warranty Info</a></li>
<li><a className="hover:text-white transition-colors" href="#">Technical Support</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Stay Updated</h4>
<div className="flex gap-2">
<input className="bg-neutral-900 border border-neutral-800 text-white text-xs px-3 py-2 rounded focus:outline-none focus:border-indigo-500 w-full transition-colors" placeholder="Email address" type="email"/>
<button className="bg-neutral-800 text-white p-2 rounded hover:bg-neutral-700 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600">
<p>© 2023 PC Computer Shop. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
