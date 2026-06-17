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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/50 bg-stone-50/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="h-6 w-6 bg-stone-900 rounded-full flex items-center justify-center text-stone-50 text-xs font-medium">A</div>
<span className="text-sm font-semibold tracking-tight uppercase text-stone-900">Aura</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Journal</a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Philosophy</a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Shop</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center justify-center h-8 px-4 rounded-full border border-stone-200 text-xs font-medium text-stone-600 hover:border-stone-400 hover:text-stone-900 transition-all bg-white">
                    Get in touch
                </button>
<button className="md:hidden text-stone-800">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.3]"></div>
<div className="max-w-7xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-stone-400 animate-pulse"></span>
<span className="text-xs font-medium text-stone-600">New Collection: Ethereal Skin</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-stone-900 mb-6 max-w-4xl leading-[1.1]">
                Science meets <br className="hidden md:block"/> <span className="text-stone-400">natural</span> radiance.
            </h1>
<p className="text-lg text-stone-500 max-w-xl mb-10 font-light leading-relaxed">
                Curating the finest botanical ingredients powered by clinical precision. We design skincare that respects your biology.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="h-12 px-8 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors flex items-center gap-2 shadow-lg shadow-stone-900/10">
                    Explore Products
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full bg-white border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-50 transition-colors">
                    View Lookbook
                </button>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto aspect-video md:aspect-[2.4/1] overflow-hidden rounded-2xl shadow-2xl shadow-stone-200/50 border border-stone-100">
<img alt="Skin texture close up" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
</div>
</section>

<section className="border-y border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-stone-400 mb-2" icon="solar:leaf-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-sm font-semibold text-stone-900">100% Organic</span>
<span className="text-xs text-stone-500">Certified Sourcing</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-stone-400 mb-2" icon="solar:test-tube-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-sm font-semibold text-stone-900">Clinically Proven</span>
<span className="text-xs text-stone-500">Dermatologist Tested</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-stone-400 mb-2" icon="solar:heart-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-sm font-semibold text-stone-900">Cruelty Free</span>
<span className="text-xs text-stone-500">Leaping Bunny Certified</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-stone-400 mb-2" icon="solar:recycle-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-sm font-semibold text-stone-900">Sustainable</span>
<span className="text-xs text-stone-500">Recyclable Packaging</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-3">The Essentials</h2>
<p className="text-stone-500 text-sm md:text-base max-w-sm">Daily rituals designed to purify, hydrate, and protect your skin barrier.</p>
</div>
<a className="text-sm font-medium text-stone-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View all products <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white rounded-xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300">
<div className="absolute top-6 right-6 z-10">
<button className="text-stone-300 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="aspect-square bg-stone-50 rounded-lg mb-6 overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Hydrating Serum</h3>
<p className="text-xs text-stone-500">Hyaluronic Acid + B5</p>
</div>
<span className="text-sm font-medium text-stone-900">$42</span>
</div>
<button className="w-full mt-6 py-2 rounded-lg border border-stone-200 text-xs font-medium text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all">Add to Cart</button>
</div>

<div className="group relative bg-white rounded-xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300">
<div className="absolute top-6 right-6 z-10">
<button className="text-stone-300 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="aspect-square bg-stone-50 rounded-lg mb-6 overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Night Recovery</h3>
<p className="text-xs text-stone-500">Retinol Complex</p>
</div>
<span className="text-sm font-medium text-stone-900">$85</span>
</div>
<button className="w-full mt-6 py-2 rounded-lg border border-stone-200 text-xs font-medium text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all">Add to Cart</button>
</div>

<div className="group relative bg-white rounded-xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300">
<div className="absolute top-6 right-6 z-10">
<button className="text-stone-300 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="aspect-square bg-stone-50 rounded-lg mb-6 overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Balancing Toner</h3>
<p className="text-xs text-stone-500">Rose Water + Witch Hazel</p>
</div>
<span className="text-sm font-medium text-stone-900">$34</span>
</div>
<button className="w-full mt-6 py-2 rounded-lg border border-stone-200 text-xs font-medium text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all">Add to Cart</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200 bg-white">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -top-4 -left-4 w-full h-full border border-stone-200 rounded-2xl -z-10"></div>
<img alt="Woman skincare" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-2 mb-6">
<span className="h-px w-8 bg-stone-300"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Our Methodology</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6">
                    Beauty rooted in <span className="italic font-serif text-stone-400">balance</span>.
                </h2>
<p className="text-stone-600 leading-relaxed mb-8">
                    We believe that skincare should not be a battle against your skin, but a supportive dialogue. Our formulas are pH-balanced, microbiome-friendly, and free from aggressive strippers that compromise your natural barrier.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 text-stone-900">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900">Adaptogenic Ingredients</h4>
<p className="text-xs text-stone-500 mt-1">Botanicals that help your skin adapt to stress.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-stone-900">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900">Clinical Transparency</h4>
<p className="text-xs text-stone-500 mt-1">We publish the percentages of active ingredients.</p>
</div>
</li>
</ul>
<button className="text-sm font-medium text-stone-900 border-b border-stone-300 pb-0.5 hover:border-stone-900 transition-colors">
                    Read our full manifesto
                </button>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">The Gallery</h2>
<div className="flex gap-2">
<button className="h-10 w-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-800 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="h-10 w-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-800 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-xl bg-stone-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-xs uppercase tracking-wider text-stone-300 mb-1 block">Campaign</span>
<h3 className="text-xl font-medium">Summer Solstice</h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-stone-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-lg font-medium">Ingredient Focus</h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-stone-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-lg font-medium">Rituals</h3>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-stone-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-xs uppercase tracking-wider text-stone-300 mb-1 block">Studio</span>
<h3 className="text-xl font-medium">Behind the Scenes</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-stone-200">
<div className="max-w-2xl mx-auto text-center">
<iconify-icon className="text-stone-900 mb-4" icon="solar:letter-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Join the Inner Circle</h2>
<p className="text-stone-500 mb-8">Receive early access to new drops, skincare education, and exclusive invites.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-1 bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all placeholder:text-stone-400" placeholder="email@address.com" type="email"/>
<button className="bg-stone-900 text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-stone-800 transition-colors" type="button">Subscribe</button>
</form>
<p className="text-[10px] text-stone-400 mt-4">By subscribing you agree to our Terms &amp; Privacy Policy.</p>
</div>
</section>

<footer className="bg-white pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="h-5 w-5 bg-stone-900 rounded-full flex items-center justify-center text-stone-50 text-[10px] font-medium">A</div>
<span className="text-sm font-semibold tracking-tight uppercase text-stone-900">Aura</span>
</div>
<p className="text-stone-500 text-sm max-w-xs mb-6">
                        Redefining beauty through the lens of science and nature. Minimalist skincare for the modern individual.
                    </p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:music-note-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-1">Shop</h4>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">All Products</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Best Sellers</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Sets &amp; Bundles</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Gift Cards</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-1">Company</h4>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Our Story</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Ingredients</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Sustainability</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Careers</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-1">Support</h4>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">FAQ</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Shipping &amp; Returns</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Contact Us</a>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2024 Aura Beauty Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-stone-400 hover:text-stone-900" href="#">Privacy Policy</a>
<a className="text-xs text-stone-400 hover:text-stone-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
