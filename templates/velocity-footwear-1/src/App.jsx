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
      

<nav className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-200/50">
<div className="flex h-16 max-w-[88rem] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 text-xl font-medium tracking-tighter" href="#">Brand's Kings</a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-500">
<a className="transition-colors text-slate-900" href="#">Men</a>
<a className="transition-colors hover:text-slate-900" href="#">Women</a>
<a className="transition-colors hover:text-slate-900" href="#">Trail</a>
<a className="transition-colors hover:text-slate-900" href="#">Innovation</a>
</div>

<div className="flex items-center gap-5 text-slate-600">
<button className="transition-colors flex items-center hover:text-slate-900">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="transition-colors flex items-center relative hover:text-slate-900">
<iconify-icon className="" height="20" icon="solar:cart-large-2-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-slate-900"></span>
</button>
<button className="md:hidden transition-colors flex items-center hover:text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="flex-grow gap-x-12 gap-y-12">

<section className="md:py-24 grid lg:grid-cols-2 lg:gap-8 max-w-[88rem] mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 gap-x-12 gap-y-12 items-center">
<div className="space-y-8 max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border shadow-sm text-xs font-medium border-slate-200 text-slate-600">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> 
                    V-Series 04 Now Available
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1]">
                    Engineered for <br/>
<span className="text-slate-400">forward motion.</span>
</h1>
<p className="text-lg font-normal leading-relaxed text-slate-500">
                    Experience weightless performance with our proprietary adaptive foam technology. Designed to propel you further, faster, with zero distractions.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="text-white px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 shadow-sm bg-slate-900 hover:bg-slate-800" href="#">
                        Shop Collection <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="bg-white border px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 shadow-sm border-slate-200 text-slate-900 hover:bg-slate-50" href="#">
<iconify-icon className="" height="18" icon="solar:play-circle-linear" width="18"></iconify-icon> The Science
                    </a>
</div>
</div>
<div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border shadow-sm group bg-slate-100 border-slate-200/60">
<img alt="Velocity V-Series 04 Green" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</section>

<section className="border-y bg-white border-slate-200/60">
<div className="max-w-[88rem] mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 md:gap-16">
<div className="space-y-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center shadow-sm border-slate-200 text-slate-700 bg-slate-50">
<iconify-icon height="20" icon="solar:wind-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight">AeroMesh™ Upper</h3>
<p className="text-sm leading-relaxed font-normal text-slate-500">Breathable microscopic pores actively channel heat away from your foot during intense sessions, keeping you cool.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center shadow-sm border-slate-200 text-slate-700 bg-slate-50">
<iconify-icon height="20" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight">Kinetic Return</h3>
<p className="text-sm leading-relaxed font-normal text-slate-500">Our carbon-infused midsole plate converts footstrike energy into forward momentum with 85% efficiency.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center shadow-sm border-slate-200 text-slate-700 bg-slate-50">
<iconify-icon height="20" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight">Zero Waste</h3>
<p className="text-sm leading-relaxed font-normal text-slate-500">Constructed entirely from recycled ocean plastics and bio-based foams. Performance without compromise.</p>
</div>
</div>
</section>

<section className="max-w-[88rem] mx-auto px-6 py-24">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tighter mb-2">Latest Releases</h2>
<p className="text-sm font-normal text-slate-500">Precision tools for every distance.</p>
</div>
<a className="hidden md:flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-slate-500" href="#">
                    View all <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 border shadow-sm bg-slate-100 border-slate-200/60">
<img alt="Shoe" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="w-full bg-white/90 backdrop-blur-sm border py-2.5 rounded-xl text-xs font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-sm text-slate-900 border-slate-200/50">
<iconify-icon height="16" icon="solar:bag-3-linear" width="16"></iconify-icon> Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900">V-Series 04</h3>
<p className="text-xs mt-1 font-normal text-slate-500">Men's Road Running</p>
</div>
<span className="text-sm font-medium text-slate-900">$180</span>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-blue-600 border ring-1 ring-offset-1 border-slate-200/50 ring-slate-300"></div>
<div className="w-3.5 h-3.5 rounded-full border bg-slate-900 border-slate-200/50"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 border shadow-sm bg-slate-100 border-slate-200/60">
<img alt="Shoe" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="w-full bg-white/90 backdrop-blur-sm border py-2.5 rounded-xl text-xs font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-sm text-slate-900 border-slate-200/50">
<iconify-icon height="16" icon="solar:bag-3-linear" width="16"></iconify-icon> Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900">Phantom Strider</h3>
<p className="text-xs mt-1 font-normal text-slate-500">Women's Everyday</p>
</div>
<span className="text-sm font-medium text-slate-900">$145</span>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3.5 h-3.5 rounded-full border ring-1 ring-offset-1 bg-slate-200 border-slate-200/50 ring-slate-300"></div>
<div className="w-3.5 h-3.5 rounded-full border bg-slate-800 border-slate-200/50"></div>
<div className="w-3.5 h-3.5 rounded-full bg-cyan-200 border border-slate-200/50"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 border shadow-sm bg-slate-100 border-slate-200/60">
<div className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded-md text-[10px] font-medium tracking-wide uppercase border shadow-sm border-slate-200">New</div>
<img alt="Shoe" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="w-full bg-white/90 backdrop-blur-sm border py-2.5 rounded-xl text-xs font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-sm text-slate-900 border-slate-200/50">
<iconify-icon height="16" icon="solar:bag-3-linear" width="16"></iconify-icon> Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900">Apex Trail GT</h3>
<p className="text-xs mt-1 font-normal text-slate-500">Unisex Trail Running</p>
</div>
<span className="text-sm font-medium text-slate-900">$210</span>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-[#E5E5E5] border ring-1 ring-offset-1 border-slate-200/50 ring-slate-300"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 border shadow-sm bg-slate-100 border-slate-200/60">
<img alt="Shoe" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="w-full bg-white/90 backdrop-blur-sm border py-2.5 rounded-xl text-xs font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-sm text-slate-900 border-slate-200/50">
<iconify-icon height="16" icon="solar:bag-3-linear" width="16"></iconify-icon> Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900">Core Minimal</h3>
<p className="text-xs mt-1 font-normal text-slate-500">Men's Training</p>
</div>
<span className="text-sm font-medium text-slate-900">$130</span>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-orange-400 border ring-1 ring-offset-1 border-slate-200/50 ring-slate-300"></div>
<div className="w-3.5 h-3.5 rounded-full border bg-slate-800 border-slate-200/50"></div>
</div>
</div>
</div>
</section>

<section className="max-w-[88rem] mx-auto px-6 py-12 pb-24">
<div className="grid md:grid-cols-3 gap-6 auto-rows-[340px]">

<div className="md:col-span-2 rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group border shadow-sm bg-slate-900 border-slate-800">
<img alt="Trail Running" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-900/90 via-slate-900/20"></div>
<div className="relative z-10 text-white max-w-md">
<div className="text-xs font-medium uppercase tracking-widest mb-3 text-slate-400">New Collection</div>
<h3 className="text-3xl font-medium tracking-tighter mb-3">Conquer the Elements</h3>
<p className="text-sm mb-8 font-normal leading-relaxed text-slate-400">The all-new Terrain X. Featuring waterproof Gore-Tex and lugged outsoles for unmatched grip on unpredictable surfaces.</p>
<a className="inline-flex bg-white px-6 py-2.5 rounded-full text-xs font-medium transition-colors shadow-sm text-slate-900 hover:bg-slate-100" href="#">Explore Trail</a>
</div>
</div>

<div className="rounded-3xl bg-white p-10 flex flex-col justify-between border shadow-sm relative overflow-hidden border-slate-200/60">
<div className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl bg-slate-50"></div>
<div className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow-sm relative z-10 border-slate-200 text-slate-900">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium tracking-tight mb-3">30-Day Guarantee</h3>
<p className="text-sm font-normal leading-relaxed text-slate-500">Put them to the test. If you're not completely satisfied with the performance, return them for a full refund. No questions asked.</p>
<a className="inline-flex items-center gap-1 mt-6 text-sm font-medium transition-colors text-slate-900 hover:text-slate-500" href="#">
                            Learn more <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t bg-white border-slate-200">
<div className="max-w-[88rem] mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-8">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="text-xl font-medium tracking-tighter block mb-6" href="#">VELOCITY</a>
<p className="text-sm font-normal leading-relaxed max-w-sm mb-10 text-slate-500">Designing footwear that pushes boundaries, respects the planet, and empowers athletes of all levels.</p>

<form className="relative max-w-sm group">
<input className="w-full bg-transparent border-b pb-3 text-sm font-normal outline-none transition-colors pr-8 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-slate-900" placeholder="Email address for updates" type="email"/>
<button className="absolute right-0 top-0 transition-colors h-5 flex items-center text-slate-400 group-focus-within:text-slate-900" type="submit">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
<div className="">
<h4 className="text-xs font-medium tracking-tight mb-5 text-slate-900">Products</h4>
<ul className="space-y-4 text-sm font-normal text-slate-500">
<li className=""><a className="transition-colors hover:text-slate-900" href="#">Men's Running</a></li>
<li className=""><a className="transition-colors hover:text-slate-900" href="#">Women's Running</a></li>
<li className=""><a className="transition-colors hover:text-slate-900" href="#">Trail &amp; Hiking</a></li>
<li className=""><a className="transition-colors hover:text-slate-900" href="#">Training</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#">Everyday</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-medium tracking-tight mb-5 text-slate-900">Innovation</h4>
<ul className="space-y-4 text-sm font-normal text-slate-500">
<li><a className="transition-colors hover:text-slate-900" href="#">AeroMesh™</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#">Kinetic Foam</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#">Sustainability</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#">The Lab</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-medium tracking-tight mb-5 text-slate-900">Support</h4>
<ul className="space-y-4 text-sm font-normal text-slate-500">
<li><a className="transition-colors hover:text-slate-900" href="#">Help Center</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#">Returns &amp; Exchanges</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#">Shipping Info</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#">Track Order</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium tracking-tight mb-5 text-slate-900">Company</h4>
<ul className="space-y-4 text-sm font-normal text-slate-500">
<li><a className="transition-colors hover:text-slate-900" href="#">About Us</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#">Careers</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#">Press</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#">Stores</a></li>
</ul>
</div>
</div>
<div className="max-w-[88rem] mx-auto px-6 py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-normal border-slate-100 text-slate-400">
<p>© 2024 Velocity Footwear Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="transition-colors hover:text-slate-900" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-slate-900" href="#">Terms of Service</a>
<a className="transition-colors hover:text-slate-900" href="#">Cookie Settings</a>
</div>
</div>
</footer>

    </>
  );
}
