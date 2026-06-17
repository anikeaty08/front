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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-bold uppercase text-stone-900 z-50" href="#">
                Liquid Lemn
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#collection">Shop</a>
<a className="hover:text-stone-900 transition-colors" href="#story">Story</a>
<a className="hover:text-stone-900 transition-colors" href="#popups">Pop-ups</a>
<a className="hover:text-stone-900 transition-colors" href="#size">Size Guide</a>
</div>
<div className="flex items-center gap-4">
<button aria-label="Search" className="hover:opacity-70">
<iconify-icon height="20" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button aria-label="Cart" className="hover:opacity-70 relative">
<iconify-icon height="20" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-600 rounded-full"></span>
</button>
<button className="md:hidden hover:opacity-70">
<iconify-icon height="20" icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Models in Zambarau sets" className="w-full h-full object-cover object-center opacity-90" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2a1b24]/40 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
<div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 fade-up">
<span className="w-2 h-2 rounded-full bg-rose-500"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase">Made in Kenya · Worldwide Shipping</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 fade-up delay-100">
                Own Your Stripes.
            </h1>
<p className="text-lg md:text-xl text-stone-100 font-normal max-w-xl mx-auto mb-10 leading-relaxed fade-up delay-200">
                Afrofuturist ritual wear from East Africa — fluid, body‑positive, uniquely you.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up delay-300">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-stone-900 text-sm font-semibold rounded hover:bg-stone-100 transition-colors tracking-tight">
                    Shop New Collection
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/30 backdrop-blur-sm text-white text-sm font-medium rounded hover:bg-white/10 transition-colors tracking-tight">
                    Size Guide
                </button>
</div>
</div>
</header>

<div className="bg-rose-950 text-rose-50 py-3 border-b border-rose-900">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4 text-xs md:text-sm tracking-tight font-medium overflow-x-auto no-scrollbar whitespace-nowrap">
<div className="flex items-center gap-2">
<iconify-icon height="16" icon="lucide:globe" strokeWidth="1.5" width="16"></iconify-icon>
<span>Worldwide Shipping</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="16" icon="lucide:truck" strokeWidth="1.5" width="16"></iconify-icon>
<span>Countrywide Delivery (KE)</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="16" icon="lucide:shield-check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Secure Checkout</span>
</div>
</div>
</div>

<section className="py-24 bg-[#FDFCF8]" id="collection">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-stone-900 mb-2">The Collection</h2>
<p className="text-stone-500">Ritual wear for the modern nomad.</p>
</div>
<a className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-stone-900 hover:text-rose-600 transition-colors" href="#">
                    View All <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded bg-stone-100 aspect-[3/4] mb-4">
<img alt="Jasiri Poncho" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/90 backdrop-blur text-stone-900 py-2 text-xs font-semibold uppercase tracking-wide rounded shadow-sm hover:bg-white">View Details</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">Jasiri Poncho</h3>
<p className="text-xs text-stone-500 mt-1">Moves with your rhythm</p>
</div>
<span className="text-sm font-medium text-stone-900">$120</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded bg-stone-100 aspect-[3/4] mb-4">
<img alt="Hippie Royalty Robe" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/90 backdrop-blur text-stone-900 py-2 text-xs font-semibold uppercase tracking-wide rounded shadow-sm hover:bg-white">View Details</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">Hippie Royalty Robe</h3>
<p className="text-xs text-stone-500 mt-1">Regal comfort for any gender</p>
</div>
<span className="text-sm font-medium text-stone-900">$145</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded bg-stone-100 aspect-[3/4] mb-4">
<img alt="Zambarau Set" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&amp;w=983&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide rounded-sm">Bestseller</span>
<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/90 backdrop-blur text-stone-900 py-2 text-xs font-semibold uppercase tracking-wide rounded shadow-sm hover:bg-white">View Details</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">Zambarau Sets</h3>
<p className="text-xs text-stone-500 mt-1">Crop + Shorts ritual</p>
</div>
<span className="text-sm font-medium text-stone-900">$95</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded bg-stone-100 aspect-[3/4] mb-4">
<img alt="Cropped Bomber Jacket" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="flex gap-1 absolute top-3 right-3">
<div className="w-3 h-3 rounded-full bg-purple-700 border border-white"></div>
<div className="w-3 h-3 rounded-full bg-rose-500 border border-white"></div>
<div className="w-3 h-3 rounded-full bg-amber-800 border border-white"></div>
</div>
<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/90 backdrop-blur text-stone-900 py-2 text-xs font-semibold uppercase tracking-wide rounded shadow-sm hover:bg-white">View Details</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">Cropped Bomber</h3>
<p className="text-xs text-stone-500 mt-1">Structured warmth</p>
</div>
<span className="text-sm font-medium text-stone-900">$180</span>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-1 text-sm font-medium text-stone-900 hover:text-rose-600 transition-colors" href="#">
                    View All <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#2a1b24] text-stone-100 relative overflow-hidden" id="story">

<div className="absolute top-0 right-0 w-1/3 h-full bg-rose-900/10 blur-3xl rounded-full translate-x-1/2"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<span className="text-rose-400 font-semibold tracking-wide uppercase text-xs mb-4 block">Since 2021</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-8 leading-tight">
                Disrupting norms with East African textiles. <span className="text-stone-500">Every stitch carries your freedom, every thread tells your story.</span>
</h2>
<p className="text-lg text-stone-400 max-w-2xl mx-auto mb-10 font-light">
                Liquid Lemn crafts ritual wear that transcends binaries. We blend contemporary cuts with Kikoy, Kanga, and Maasai Shuka fabrics to create pieces that honor heritage while embracing the future.
            </p>
<a className="inline-flex items-center gap-2 text-white border-b border-rose-500 pb-1 hover:text-rose-400 transition-colors" href="#">
                Explore Our Craft <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-white border-b border-stone-100" id="popups">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tighter text-stone-900 mb-8 text-center">Upcoming Pop‑ups</h2>
<div className="space-y-4">

<div className="flex items-center justify-between p-6 border border-stone-100 rounded-lg hover:border-stone-300 transition-colors bg-stone-50/50">
<div className="flex items-center gap-6">
<div className="text-center">
<span className="block text-xs font-bold text-stone-400 uppercase tracking-wider">NOV</span>
<span className="block text-xl font-semibold text-stone-900">12</span>
</div>
<div>
<h3 className="text-base font-medium text-stone-900">Nairobi, Kenya</h3>
<p className="text-sm text-stone-500">The Alchemist Bar</p>
</div>
</div>
<button className="text-xs font-semibold text-rose-600 border border-rose-200 px-4 py-2 rounded-full hover:bg-rose-50 transition-colors">Save Date</button>
</div>

<div className="flex items-center justify-between p-6 border border-stone-100 rounded-lg hover:border-stone-300 transition-colors bg-stone-50/50">
<div className="flex items-center gap-6">
<div className="text-center">
<span className="block text-xs font-bold text-stone-400 uppercase tracking-wider">DEC</span>
<span className="block text-xl font-semibold text-stone-900">05</span>
</div>
<div>
<h3 className="text-base font-medium text-stone-900">Amsterdam, NL</h3>
<p className="text-sm text-stone-500">De Hallen Studio</p>
</div>
</div>
<button className="text-xs font-semibold text-rose-600 border border-rose-200 px-4 py-2 rounded-full hover:bg-rose-50 transition-colors">Save Date</button>
</div>
</div>
<p className="text-center text-sm text-stone-500 mt-8">
                Can’t make it? Say ‘Send’ — we deliver globally.
            </p>
</div>
</section>

<section className="py-24 bg-[#FDFCF8] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<iconify-icon className="text-rose-200 mb-6 mx-auto" height="48" icon="lucide:quote" width="48"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-900 leading-tight max-w-4xl mx-auto">
                    “Style isn’t what you wear… it’s how you exist.”
                </h2>
</div>

<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">

<div className="snap-center shrink-0 w-72 md:w-80 relative group">
<div className="aspect-[4/5] overflow-hidden rounded mb-3">
<img alt="Client 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1064&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold uppercase tracking-wide text-rose-600">The Looks</span>
<span className="text-xs text-stone-400">@nairobian_gem</span>
</div>
</div>

<div className="snap-center shrink-0 w-72 md:w-80 relative group">
<div className="aspect-[4/5] overflow-hidden rounded mb-3">
<img alt="Client 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold uppercase tracking-wide text-rose-600">Show Time</span>
<span className="text-xs text-stone-400">@afro.future</span>
</div>
</div>

<div className="snap-center shrink-0 w-72 md:w-80 relative group">
<div className="aspect-[4/5] overflow-hidden rounded mb-3">
<img alt="Client 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold uppercase tracking-wide text-rose-600">Happy Clients</span>
<span className="text-xs text-stone-400">@liquid_lover</span>
</div>
</div>

<div className="snap-center shrink-0 w-72 md:w-80 relative group">
<div className="aspect-[4/5] overflow-hidden rounded mb-3">
<img alt="Client 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&amp;w=1027&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold uppercase tracking-wide text-rose-600">The Vibe</span>
<span className="text-xs text-stone-400">@culture.ke</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-stone-100" id="size">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-4">Fit for Every Body</h3>
<p className="text-stone-600 mb-6 leading-relaxed">
                    Our cuts are generous and gender-fluid. Ritual wear is meant to move with you, not restrict you. Whether you prefer a structured cropped bomber or a flowing robe, comfort is our baseline.
                </p>
<div className="flex flex-col gap-3">
<div className="flex items-start gap-3">
<iconify-icon className="text-rose-600 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
<span className="text-sm text-stone-600">Adjustable waists on all Zambarau Shorts</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-rose-600 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
<span className="text-sm text-stone-600">Oversized silhouettes for Ponchos &amp; Robes</span>
</div>
</div>
</div>
<div className="md:w-1/2 flex justify-center md:justify-end">
<a className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-stone-900 rounded hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900" href="#">
                    See Size Chart
                    <div className="absolute inset-0 rounded ring-1 ring-white/20 group-hover:ring-white/40"></div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-3">Join the Ritual</h2>
<p className="text-stone-500 mb-8">Join for drops, pop‑up codes, and styling guides.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded text-sm placeholder:text-stone-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 bg-stone-900 text-white text-sm font-semibold rounded hover:bg-rose-700 transition-colors whitespace-nowrap" type="button">
                    Join the List
                </button>
</form>
<p className="text-[10px] text-stone-400 mt-4">By subscribing, you agree to our Privacy Policy.</p>
</div>
</section>

<footer className="bg-[#1c1218] text-stone-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-white text-lg font-bold tracking-tighter uppercase mb-6 block" href="#">Liquid Lemn</a>
<p className="text-xs leading-relaxed mb-6">
                    Made in Kenya.<br/>
                    Based in Amsterdam &amp; Nairobi.
                </p>
<div className="flex gap-4">
<a aria-label="Instagram" className="hover:text-rose-500 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a aria-label="Threads" className="hover:text-rose-500 transition-colors" href="#">
<iconify-icon icon="lucide:at-sign" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Shop</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Zambarau Sets</a></li>
<li><a className="hover:text-white transition-colors" href="#">Outerwear</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Support</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-white transition-colors" href="mailto:uniquelyu@liquidlemn.com">uniquelyu@liquidlemn.com</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
<div className="space-y-3 text-sm">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="https://wa.me/254772700225">
<iconify-icon icon="lucide:message-circle" width="16"></iconify-icon>
                        WhatsApp +254 772 700225
                    </a>
<p className="text-xs mt-4 pt-4 border-t border-white/10">
                        © 2024 Liquid Lemn.<br/>All rights reserved.
                    </p>
<div className="flex gap-4 text-xs mt-2">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
