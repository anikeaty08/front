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
      

<div className="bg-slate-900 text-slate-400 py-2 border-b border-slate-800 text-xs">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
                    +231 77 123 4567
                </span>
<span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                    Monrovia, Liberia
                </span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-amber-400 transition-colors" href="https://www.facebook.com/pages/SUNNY-BROTHERS-INC/100991009942507" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon>
</a>
<a className="hover:text-amber-400 transition-colors" href="https://twitter.com/@sunny_b191" target="_blank">
<iconify-icon icon="solar:plain-linear" width="16"></iconify-icon>
</a>
<a className="hover:text-amber-400 transition-colors" href="skype:jaipradeepti?chat">
<iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 glass-nav border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="flex items-center gap-2 group" href="index.html">
<div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-sm">
<iconify-icon icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-serif text-lg font-semibold tracking-tight text-slate-900 leading-none group-hover:text-amber-600 transition-colors">SUNNY BROTHERS</span>
<span className="text-[10px] tracking-widest uppercase text-slate-400">Incorporation</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-amber-600" href="index.html">Home</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="about.html">About Us</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="products.html">Our Products</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="services.html">Our Services</a>
<a className="bg-slate-900 text-white px-5 py-2 rounded-sm hover:bg-slate-800 transition-colors" href="contacts.html">Contact Us</a>
</div>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
<div className="absolute inset-0 opacity-40">
<img alt="Construction Materials" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-block px-3 py-1 mb-6 border border-amber-500/30 bg-amber-500/10 rounded-full">
<span className="text-amber-400 text-xs tracking-widest uppercase font-medium">Est. 1991 • Monrovia, Liberia</span>
</div>
<h1 className="text-4xl md:text-6xl text-white font-serif font-medium tracking-tight mb-6 leading-tight">
                Welcome to <span className="italic text-amber-500">Sunny Brothers Inc.</span>
</h1>
<p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                The premier distributor of general building materials, electrical fixtures, generators, and industrial solutions in West Africa.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-3 bg-white text-slate-900 font-medium rounded-sm hover:bg-amber-50 transition-colors flex items-center justify-center gap-2" href="products.html">
                    View Catalog <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-8 py-3 border border-white/30 text-white font-medium rounded-sm hover:bg-white/10 transition-colors backdrop-blur-sm" href="contacts.html">
                    Find a Branch
                </a>
</div>
</div>
</header>

<div className="bg-white border-b border-slate-200 py-8 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-4">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest">Authorized Sole Distributors For</p>
</div>
<div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap px-6 opacity-80">

<div className="flex items-center gap-2 group cursor-default">
<div className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-blue-600" icon="solar:paint-roller-linear" width="24"></iconify-icon>
</div>
<span className="font-bold text-lg text-slate-700 tracking-tight">Berger Paints</span>
</div>
<div className="w-px h-8 bg-slate-200 hidden sm:block"></div>
<div className="flex items-center gap-2 group cursor-default">
<div className="p-2 bg-slate-100 rounded-full group-hover:bg-yellow-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-yellow-600" icon="solar:key-linear" width="24"></iconify-icon>
</div>
<span className="font-bold text-lg text-slate-700 tracking-tight">Yale Locks</span>
</div>
<div className="w-px h-8 bg-slate-200 hidden sm:block"></div>
<div className="flex items-center gap-2 group cursor-default">
<div className="p-2 bg-slate-100 rounded-full group-hover:bg-cyan-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-cyan-600" icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<span className="font-bold text-lg text-slate-700 tracking-tight">AJAY Afridev</span>
</div>
<div className="w-px h-8 bg-slate-200 hidden sm:block"></div>
<div className="flex items-center gap-2 group cursor-default">
<div className="p-2 bg-slate-100 rounded-full group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-red-600" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<span className="font-bold text-lg text-slate-700 tracking-tight">KAMA Generators</span>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 space-y-8">
<div>
<h2 className="text-3xl font-serif text-slate-900 mb-6 tracking-tight">Company Overview</h2>
<div className="prose prose-slate prose-lg text-slate-500 font-light leading-relaxed">
<p className="mb-4">
                            Sunny Brothers Incorporation was founded in 1991 by <strong className="text-slate-800 font-medium">Mr. Dilip Babani</strong>. The company is located in the bustling city of Monrovia, Liberia, West Africa. We have had a long and successful presence in the market due to our dynamic and energetic workforce providing the best quality products and service.
                        </p>
<p className="mb-4">
                            The company is a family concern that enables us to outperform under the solid foundation of our visionary leader Mr. Dilip Babani (Chairman), who has been in this market for over 35 years.
                        </p>
<p className="mb-4 border-l-4 border-amber-500 pl-4 bg-white py-2 italic text-slate-700">
                            "Our goal to achieve the best quality, durability and appearance at the lowest price has made us a well-known brand in the Liberian market."
                        </p>
<p className="mb-4">
                            We supply general building materials, electrical fixtures, and high-quality industrial products. We currently operate with <strong className="text-slate-800 font-medium">6 branches</strong>: Clara Town (Head Office), New Georgia Junction, JJY, Gardnerville, Red Light, with more stores in the pipeline.
                        </p>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-6 mt-12">
<h3 className="text-2xl font-serif text-slate-900 tracking-tight">Product Categories</h3>
<a className="text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1" href="products.html">
                            View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

<a className="group bg-white p-4 rounded border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300" href="products.html">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-amber-600" icon="solar:hammer-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Hardware &amp; Household</h4>
<p className="text-xs text-slate-400">Tools, fixtures &amp; supplies</p>
</a>
<a className="group bg-white p-4 rounded border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300" href="products.html">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-amber-600" icon="solar:layers-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Steel Items</h4>
<p className="text-xs text-slate-400">Rods, sheets &amp; structural</p>
</a>
<a className="group bg-white p-4 rounded border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300" href="products.html">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-amber-600" icon="solar:bolt-circle-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Generators</h4>
<p className="text-xs text-slate-400">Marquis &amp; KAMA Power</p>
</a>
<a className="group bg-white p-4 rounded border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300" href="products.html">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-amber-600" icon="solar:waterdrops-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Water &amp; Hand Pumps</h4>
<p className="text-xs text-slate-400">Industrial &amp; residential</p>
</a>
<a className="group bg-white p-4 rounded border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300" href="products.html">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-amber-600" icon="solar:lock-keyhole-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Doors &amp; Locks</h4>
<p className="text-xs text-slate-400">Yale security systems</p>
</a>
<a className="group bg-white p-4 rounded border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300" href="products.html">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-amber-600" icon="solar:paint-roller-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Paints &amp; Tiles</h4>
<p className="text-xs text-slate-400">Finishing materials</p>
</a>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="bg-slate-900 text-white p-6 rounded-sm shadow-xl">
<h3 className="font-serif text-xl mb-4 text-white">Contact Us</h3>
<ul className="space-y-4 text-sm font-light text-slate-300">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-amber-500" icon="solar:map-point-linear"></iconify-icon>
<span>Clara Town (Head Office), Monrovia, Liberia</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-amber-500" icon="solar:phone-calling-linear"></iconify-icon>
<span>+231 77 123 4567</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-amber-500" icon="solar:letter-linear"></iconify-icon>
<span>info@sunnybrothers.inc</span>
</li>
</ul>
<a className="mt-6 block w-full bg-white text-slate-900 text-center py-2.5 rounded-sm font-medium hover:bg-amber-50 transition-colors text-sm" href="contacts.html">
                        Get a Quote
                    </a>
</div>

<div className="bg-white p-6 rounded-sm border border-slate-200">
<h3 className="font-serif text-lg mb-4 text-slate-900 border-b border-slate-100 pb-2">Our Locations</h3>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Clara Town (Head Office)
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> New Georgia Junction
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> JJY
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Gardnerville
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Red Light
                        </li>
</ul>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-sm border border-slate-200 text-center">
<span className="block text-3xl font-serif text-slate-900">30+</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Years Experience</span>
</div>
<div className="bg-white p-4 rounded-sm border border-slate-200 text-center">
<span className="block text-3xl font-serif text-slate-900">6</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Branches</span>
</div>
</div>
</div>
</div>
</main>

<section className="bg-slate-100 py-16 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white rounded flex items-center justify-center shrink-0 text-amber-500 shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg text-slate-900">Quality Assurance</h4>
<p className="text-sm font-light text-slate-500 mt-1">We aim to offer a range of quality goods at superior value to our customers.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-white rounded flex items-center justify-center shrink-0 text-amber-500 shadow-sm">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg text-slate-900">Community Focus</h4>
<p className="text-sm font-light text-slate-500 mt-1">Integral part of the Liberian community for over a quarter of a century.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-white rounded flex items-center justify-center shrink-0 text-amber-500 shadow-sm">
<iconify-icon icon="solar:box-minimalistic-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg text-slate-900">Wide Inventory</h4>
<p className="text-sm font-light text-slate-500 mt-1">From hand pumps to industrial generators, we stock it all.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-amber-500" icon="solar:buildings-2-linear" width="24"></iconify-icon>
<span className="font-serif text-xl tracking-tight">Sunny Brothers Inc.</span>
</div>
<p className="text-slate-400 text-sm font-light max-w-sm mb-6">
                        Building Liberia brick by brick since 1991. The leading supplier of construction materials and industrial solutions.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="font-serif text-lg mb-4 text-slate-200">Links</h5>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-amber-400 transition-colors" href="index.html">Home</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="about.html">About Us</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="products.html">Our Products</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="services.html">Services</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="contacts.html">Contact</a></li>
</ul>
</div>
<div>
<h5 className="font-serif text-lg mb-4 text-slate-200">Legal</h5>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-amber-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2023 Sunny Brothers Inc. All rights reserved.</p>
<p className="mt-2 md:mt-0">Est. 1991</p>
</div>
</div>
</footer>

    </>
  );
}
