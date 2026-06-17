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
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-amber-400 to-orange-600 flex items-center justify-center text-neutral-950 font-semibold text-xs tracking-tighter">
                    SE
                </div>
<span className="text-white font-medium tracking-tight group-hover:opacity-80 transition-opacity">SINDHI.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#products">Products</a>
<a className="hover:text-white transition-colors" href="#solar">Solar Solutions</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">Company</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="20"></span>
</button>
<a className="px-4 py-2 text-xs font-medium bg-white text-black rounded hover:bg-neutral-200 transition-colors" href="#contact">
                    Get Quote
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -z-10 opacity-50"></div>
<div className="max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-amber-300 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                Now installing Hybrid Solar Systems 2.0
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                Powering the Future <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500">With Sustainable Energy.</span>
</h1>
<p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Your premier destination for high-end electronics and comprehensive solar energy systems. Efficient, reliable, and built for tomorrow.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
                    Explore Solar
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full md:w-auto px-8 py-3 border border-white/10 bg-white/5 text-white text-sm font-medium rounded hover:bg-white/10 transition-all">
                    View Electronics
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto relative group">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10"></div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
<div className="aspect-square rounded border border-white/5 bg-white/5 flex items-center justify-center">
<span className="iconify text-amber-500/50" data-icon="lucide:sun" data-width="48"></span>
</div>
<div className="aspect-square rounded border border-white/5 bg-white/5 flex items-center justify-center translate-y-8">
<span className="iconify text-blue-500/50" data-icon="lucide:zap" data-width="48"></span>
</div>
<div className="aspect-square rounded border border-white/5 bg-white/5 flex items-center justify-center">
<span className="iconify text-green-500/50" data-icon="lucide:battery-charging" data-width="48"></span>
</div>
<div className="aspect-square rounded border border-white/5 bg-white/5 flex items-center justify-center translate-y-8">
<span className="iconify text-purple-500/50" data-icon="lucide:cpu" data-width="48"></span>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Our Core Solutions</h2>
<p className="text-neutral-400 text-sm max-w-md">Bridging the gap between consumer electronics and industrial energy solutions.</p>
</div>
<a className="text-sm text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors" href="#">View all services</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 group relative rounded-xl border border-white/10 overflow-hidden bg-neutral-900/50 hover:border-white/20 transition-all">
<img alt="Solar Panels" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity grayscale hover:grayscale-0 duration-700" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="mb-3 w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 border border-amber-500/20">
<span className="iconify" data-icon="lucide:sun" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-1">Solar Systems</h3>
<p className="text-neutral-400 text-sm">Complete installation of On-Grid, Off-Grid, and Hybrid systems tailored for your home or business.</p>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 overflow-hidden bg-neutral-900/50 hover:border-white/20 transition-all">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="mb-3 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 border border-blue-500/20">
<span className="iconify" data-icon="lucide:tv" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-1">Consumer Electronics</h3>
<p className="text-neutral-400 text-sm">Premium appliances, LED TVs, and smart home devices.</p>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 overflow-hidden bg-neutral-900/50 hover:border-white/20 transition-all">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950 to-neutral-950"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="mb-3 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 border border-purple-500/20">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-1">Inverters &amp; UPS</h3>
<p className="text-neutral-400 text-sm">Uninterrupted power supply units and pure sine wave inverters.</p>
</div>
</div>

<div className="md:col-span-2 group relative rounded-xl border border-white/10 overflow-hidden bg-neutral-900/50 hover:border-white/20 transition-all">
<img alt="Server Room / Batteries" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity grayscale hover:grayscale-0 duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="mb-3 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 border border-green-500/20">
<span className="iconify" data-icon="lucide:battery-medium" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-1">Energy Storage</h3>
<p className="text-neutral-400 text-sm">Advanced Lithium-ion and Tubular batteries for maximum backup efficiency.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
<div className="p-8 text-center">
<div className="text-3xl font-medium text-white tracking-tight">500+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Installations</div>
</div>
<div className="p-8 text-center">
<div className="text-3xl font-medium text-white tracking-tight">1.2MW</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Power Generated</div>
</div>
<div className="p-8 text-center">
<div className="text-3xl font-medium text-white tracking-tight">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Support</div>
</div>
<div className="p-8 text-center">
<div className="text-3xl font-medium text-white tracking-tight">100%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Satisfaction</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="products">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Featured Products</h2>
<p className="text-neutral-400 text-sm max-w-xl mx-auto">Discover our top-rated selection of inverters, panels, and appliances selected for durability and performance.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group flex flex-col">
<div className="aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden border border-white/5 relative mb-4">
<img alt="Inverter" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur px-2 py-1 rounded text-[10px] font-medium text-white border border-white/10">In Stock</div>
</div>
<h3 className="text-white font-medium text-base">Hybrid Inverter 5kW</h3>
<p className="text-neutral-500 text-xs mt-1">Smart Load Management</p>
<div className="flex items-center justify-between mt-3">
<span className="text-neutral-300 text-sm">$450.00</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
</div>

<div className="group flex flex-col">
<div className="aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden border border-white/5 relative mb-4">
<img alt="Solar Panel" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-white font-medium text-base">Monocrystalline Panel</h3>
<p className="text-neutral-500 text-xs mt-1">550W High Efficiency</p>
<div className="flex items-center justify-between mt-3">
<span className="text-neutral-300 text-sm">$180.00</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
</div>

<div className="group flex flex-col">
<div className="aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden border border-white/5 relative mb-4">
<img alt="Battery" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-amber-500/10 backdrop-blur px-2 py-1 rounded text-[10px] font-medium text-amber-400 border border-amber-500/20">Best Seller</div>
</div>
<h3 className="text-white font-medium text-base">Lithium Battery 48V</h3>
<p className="text-neutral-500 text-xs mt-1">6000 Cycles Life</p>
<div className="flex items-center justify-between mt-3">
<span className="text-neutral-300 text-sm">$1,200.00</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
</div>

<div className="group flex flex-col">
<div className="aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden border border-white/5 relative mb-4">
<img alt="Electronics" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&amp;w=2076&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-white font-medium text-base">Smart DC Fan</h3>
<p className="text-neutral-500 text-xs mt-1">Energy Saving Inverter Tech</p>
<div className="flex items-center justify-between mt-3">
<span className="text-neutral-300 text-sm">$65.00</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-neutral-900/20"></div>
<div className="max-w-3xl mx-auto relative z-10">
<div className="rounded-2xl bg-neutral-950 border border-white/10 p-8 md:p-12 shadow-2xl">
<div className="text-center mb-10">
<span className="iconify mx-auto text-amber-500 mb-4" data-icon="lucide:message-square" data-width="32"></span>
<h2 className="text-2xl font-medium text-white tracking-tight">Request a Consultation</h2>
<p className="text-neutral-400 text-sm mt-2">Interested in a solar setup or wholesale electronics? Let's talk.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Name</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Phone</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Interest</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="cursor-pointer custom-checkbox">
<input className="hidden" name="interest" type="radio"/>
<div className="flex items-center justify-center gap-2 border border-white/10 rounded py-2 px-4 text-xs font-medium text-neutral-300 hover:bg-white/5 transition-colors">
                                     Solar Installation
                                 </div>
</label>
<label className="cursor-pointer custom-checkbox">
<input className="hidden" name="interest" type="radio"/>
<div className="flex items-center justify-center gap-2 border border-white/10 rounded py-2 px-4 text-xs font-medium text-neutral-300 hover:bg-white/5 transition-colors">
                                    Electronics
                                </div>
</label>
<label className="cursor-pointer custom-checkbox">
<input className="hidden" name="interest" type="radio"/>
<div className="flex items-center justify-center gap-2 border border-white/10 rounded py-2 px-4 text-xs font-medium text-neutral-300 hover:bg-white/5 transition-colors">
                                    Maintenance
                                </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-neutral-900 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none" placeholder="Tell us about your energy requirements..." rows="3"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded text-sm hover:bg-neutral-200 transition-colors">
                        Submit Request
                    </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-white font-bold text-[10px]">SE</div>
<span className="text-white font-medium tracking-tight">SINDHI.</span>
</div>
<p className="text-neutral-500 text-sm max-w-sm mb-6">
                        Empowering homes and businesses with cutting-edge electronics and renewable energy solutions since 2010.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Products</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-amber-400 transition-colors" href="#">Solar Panels</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Hybrid Inverters</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">LiFePO4 Batteries</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Home Appliances</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-amber-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Projects</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2023 Sindhi Electronics &amp; Solar System. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-neutral-600">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Systems Operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
