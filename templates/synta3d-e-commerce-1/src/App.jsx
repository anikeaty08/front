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



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 border-b border-stone-200/60 bg-stone-50/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<img alt="Synta3D Logo" className="h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity" src="https://i.imgur.com/BODeF6u.jpeg"/>
</a>

<div className="hidden md:flex items-center gap-8 text-lg font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#products">Products</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<button className="text-stone-500 hover:text-stone-900 transition-colors p-2">
<i className="w-6 h-6" data-lucide="search"></i>
</button>
<button className="relative text-stone-500 hover:text-stone-900 transition-colors p-2">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
<span className="absolute top-1 right-1 w-2.5 h-2.5 bg-amber-600 rounded-full border-2 border-stone-50"></span>
</button>
<a className="hidden md:block bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors" href="#products">
                    Shop Now
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-sm font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    New Collection Available
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.1]">
                    Digital precision.<br/>
<span className="text-stone-400">Natural warmth.</span>
</h1>
<p className="text-xl text-stone-600 max-w-lg leading-relaxed">
                    We fuse industrial-grade 3D printing with premium solid wood to create modular organization tools for the modern workspace.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-stone-800 transition-all hover:scale-[1.02]" href="#products">
                        Explore Collection
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-700 px-8 py-3.5 rounded-full text-lg font-medium hover:bg-stone-50 hover:border-stone-300 transition-all" href="#about">
                        Our Process
                    </a>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-stone-200 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 shadow-xl border border-stone-100">
<img alt="Wooden desk setup with 3d printed parts" className="object-cover w-full h-full transform hover:scale-105 transition duration-700 ease-out" src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">Engineered for aesthetics</h2>
<p className="text-xl text-stone-600 leading-relaxed">
                    Synta3D bridges the gap between rapid prototyping and artisanal craft. By combining the structural freedom of 3D printed polymers with the timeless texture of walnut and oak, we build tools that last.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-center mb-6 text-amber-700">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Hybrid Construction</h3>
<p className="text-lg text-stone-500 leading-relaxed">
                        Carbon-fiber reinforced PLA structural nodes connected by solid hardwood beams.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-center mb-6 text-amber-700">
<i className="w-6 h-6" data-lucide="grid"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Fully Modular</h3>
<p className="text-lg text-stone-500 leading-relaxed">
                        Designed to adapt. Swap parts, extend shelves, and reconfigure your setup as your needs change.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-center mb-6 text-amber-700">
<i className="w-6 h-6" data-lucide="recycle"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Conscious Materials</h3>
<p className="text-lg text-stone-500 leading-relaxed">
                        Biodegradable thermoplastics and FSC-certified wood scraps upcycled into premium products.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">Curated Collection</h2>
<p className="text-lg text-stone-500 mt-2">Essential tools for the creative professional.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-stone-600 hover:text-stone-900 font-medium transition-colors" href="#">
                    View all
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group">
<div className="relative aspect-square overflow-hidden rounded-2xl bg-white border border-stone-200 mb-4">
<img alt="Monitor Stand" className="object-cover w-full h-full group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1542487354-feaf93476caa?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-stone-900 p-3 rounded-full shadow-sm hover:bg-stone-900 hover:text-white transition-colors translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-stone-900">The Elevate Stand</h3>
<p className="text-lg text-stone-500">Walnut / Matte Black</p>
</div>
<span className="text-lg font-medium text-stone-900">$120</span>
</div>
</div>

<div className="group">
<div className="relative aspect-square overflow-hidden rounded-2xl bg-white border border-stone-200 mb-4">
<img alt="Desk Shelf" className="object-cover w-full h-full group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-md">Best Seller</div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-stone-900 p-3 rounded-full shadow-sm hover:bg-stone-900 hover:text-white transition-colors translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-stone-900">Modular Shelf</h3>
<p className="text-lg text-stone-500">Oak / Stone Grey</p>
</div>
<span className="text-lg font-medium text-stone-900">$85</span>
</div>
</div>

<div className="group">
<div className="relative aspect-square overflow-hidden rounded-2xl bg-white border border-stone-200 mb-4">
<img alt="Headphone Stand" className="object-cover w-full h-full group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-stone-900 p-3 rounded-full shadow-sm hover:bg-stone-900 hover:text-white transition-colors translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-stone-900">Audio Rest</h3>
<p className="text-lg text-stone-500">Walnut / White</p>
</div>
<span className="text-lg font-medium text-stone-900">$55</span>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center gap-1 text-stone-900 font-medium underline underline-offset-4" href="#">
                    View all products
                </a>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-7xl mx-auto rounded-3xl bg-stone-900 overflow-hidden relative">
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
<div className="relative px-8 py-20 md:px-20 md:py-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Upgrade your workspace today.</h2>
<p className="text-xl text-stone-400">Join thousands of creators using Synta3D to organize their desk with sustainable style.</p>
</div>
<div className="flex-shrink-0">
<a className="inline-block bg-amber-600 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/20" href="#products">
                        Shop Collection
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Custom Orders &amp; Support</h2>
<p className="text-lg text-stone-500">Looking for a specific dimension or color combination? Let's talk.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="name">Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors text-stone-900" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors text-stone-900" id="email" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="subject">Subject</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors text-stone-900 appearance-none" id="subject">
<option>General Inquiry</option>
<option>Custom Order</option>
<option>Support</option>
<option>Wholesale</option>
</select>
<i className="absolute right-4 top-3.5 w-5 h-5 text-stone-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors text-stone-900" id="message" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-stone-900 text-white font-medium py-3.5 rounded-lg hover:bg-stone-800 transition-colors shadow-sm" type="submit">
                        Send Message
                    </button>
</div>
</form>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div className="max-w-sm">
<a className="inline-block mb-6" href="#">
<img alt="Synta3D Logo" className="h-8 object-contain grayscale hover:grayscale-0 transition duration-300" src="https://i.imgur.com/BODeF6u.jpeg"/>
</a>
<p className="text-lg text-stone-500">
                        Designing the future of workspace organization through the fusion of additive manufacturing and natural materials.
                    </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-stone-500">
<div>
<h4 className="font-semibold text-stone-900 mb-4">Shop</h4>
<ul className="space-y-3 text-lg">
<li><a className="hover:text-stone-900 transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4">Company</h4>
<ul className="space-y-3 text-lg">
<li><a className="hover:text-stone-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="hidden sm:block">
<h4 className="font-semibold text-stone-900 mb-4">Social</h4>
<ul className="space-y-3 text-lg">
<li><a className="hover:text-stone-900 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Twitter</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 gap-4">
<p className="text-stone-400 text-sm">© 2024 Synta3D. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
