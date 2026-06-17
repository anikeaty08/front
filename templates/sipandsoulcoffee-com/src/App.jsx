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
      

<div className="spline-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><iframe frameborder="0" height="100%" src="sip&amp;soul.com" width="100%"></iframe></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-slate-50/80 border-slate-200/50" style={{}}>
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-xl font-medium tracking-tighter flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded flex items-center justify-center transition-transform group-hover:rotate-12 bg-slate-900 text-slate-50" style={{}}>
<span className="font-semibold text-lg">S</span>
</div>
                SIP &amp; SOUL
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500" style={{}}>
<a className="transition-colors hover:text-slate-900" href="#home" style={{}}>Home</a>
<a className="transition-colors hover:text-slate-900" href="#menu" style={{}}>Menu</a>
<a className="transition-colors hover:text-slate-900" href="#about" style={{}}>Story</a>
<a className="transition-colors hover:text-slate-900" href="#reviews" style={{}}>Reviews</a>
<a className="px-4 py-2 rounded-full transition-colors bg-slate-900 text-white hover:bg-slate-800" href="#contact" style={{}}>Visit Us</a>
</div>

<button className="md:hidden text-slate-900" style={{}}>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative" id="home">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="animate-appear">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-cyan-50 border-cyan-100 text-cyan-800">
<iconify-icon icon="solar:cup-hot-linear" width="14"></iconify-icon>
                    Brewing fresh daily
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-slate-900" style={{}}>
                    Crafting moments, <br/>
<span className="text-slate-400" style={{}}>one cup at a time.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-md leading-relaxed" style={{}}>
                    Experience the warmth of ethically sourced beans and the comfort of our cozy corner. The perfect brew awaits.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-6 py-3 font-medium rounded-lg transition-all flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800" href="#menu" style={{}}>
                        View Menu
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="px-6 py-3 border font-medium rounded-lg transition-all flex items-center justify-center bg-white border-slate-200 text-slate-900 hover:bg-slate-50" href="#contact" style={{}}>
                        Find Location
                    </a>
</div>
</div>

<div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden animate-appear delay-100 group bg-slate-200" style={{}}>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-900/60" style={{}}></div>
<div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md border rounded-xl bg-white/10 border-white/20 text-white">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-200" style={{}}>Featured Blend</p>
<p className="text-xl font-medium tracking-tight">Karnataka Gold Roast</p>
</div>
<div className="h-10 w-10 rounded-full flex items-center justify-center bg-white text-slate-900" style={{}}>
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Not just coffee.<br/>It's a ritual.</h2>
<div className="space-y-6 text-slate-500 text-lg leading-relaxed" style={{}}>
<p>
                            Founded in 2023, Sip &amp; Soul began with a simple mission: to bring the authentic taste of Indian shade-grown coffee to the forefront. We source our beans directly from the misty hills of Coorg and Chikmagalur.
                        </p>
<p>
                            Every cup tells a story of passion, precision, and patience. From the careful selection of berries to the artisanal roasting process, we ensure that you get nothing but the finest sip.
                        </p>
</div>
<div className="grid grid-cols-2 gap-6 mt-10">
<div className="p-4 rounded-xl border bg-slate-50 border-slate-100" style={{}}>
<iconify-icon className="mb-3 text-slate-900" icon="solar:leaf-linear" style={{}} width="32"></iconify-icon>
<h3 className="font-medium text-slate-900" style={{}}>Ethically Sourced</h3>
<p className="text-sm text-slate-500 mt-1" style={{}}>Supporting local farmers directly.</p>
</div>
<div className="p-4 rounded-xl border bg-slate-50 border-slate-100" style={{}}>
<iconify-icon className="mb-3 text-slate-900" icon="solar:armchair-2-linear" style={{}} width="32"></iconify-icon>
<h3 className="font-medium text-slate-900" style={{}}>Cozy Ambience</h3>
<p className="text-sm text-slate-500 mt-1" style={{}}>Your third place between work and home.</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-12">
<div className="h-64 rounded-xl overflow-hidden bg-slate-200" style={{}}>
<img alt="Pour over" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
</div>
<div className="h-40 rounded-xl p-6 flex flex-col justify-between bg-slate-900 text-white" style={{}}>
<iconify-icon icon="solar:chef-hat-heart-linear" width="32"></iconify-icon>
<p className="font-medium">Master Roasters</p>
</div>
</div>
<div className="space-y-4">
<div className="h-40 rounded-xl border p-6 flex flex-col justify-between bg-cyan-50 border-cyan-100">
<iconify-icon className="text-cyan-900" icon="solar:medal-ribbon-star-linear" style={{}} width="32"></iconify-icon>
<p className="font-medium text-cyan-900" style={{}}>Premium Grade A</p>
</div>
<div className="h-64 rounded-xl overflow-hidden bg-slate-200" style={{}}>
<img alt="Latte art" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="menu" style={{}}>
<div className="max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-2 block" style={{}}>Our Selection</span>
<h2 className="md:text-4xl text-3xl font-medium text-slate-900 tracking-tight">Curated Menu</h2>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-slate-200" style={{}}>
<iconify-icon icon="solar:cup-hot-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">Hot Classics</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Espresso</h4>
<span className="font-medium text-slate-900" style={{}}>₹140</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Rich, intense shot of pure Arabica.</p>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Cappuccino</h4>
<span className="font-medium text-slate-900" style={{}}>₹210</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Espresso with steamed milk and thick foam.</p>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Flat White</h4>
<span className="font-medium text-slate-900" style={{}}>₹230</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Double espresso with microfoam milk.</p>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Hazelnut Latte</h4>
<span className="font-medium text-slate-900" style={{}}>₹260</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Creamy latte infused with roasted hazelnut.</p>
</div>
</div>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-slate-200" style={{}}>
<iconify-icon icon="solar:snowflake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">Cold Brews &amp; Iced</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Classic Cold Brew</h4>
<span className="font-medium text-slate-900" style={{}}>₹220</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Steeped for 18 hours. Smooth &amp; low acidity.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Vietnamese Iced</h4>
<span className="font-medium text-slate-900" style={{}}>₹250</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Robusta beans with sweetened condensed milk.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Iced Americano</h4>
<span className="font-medium text-slate-900" style={{}}>₹190</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Double shot espresso over ice and water.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Affogato</h4>
<span className="font-medium text-slate-900" style={{}}>₹280</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Vanilla bean gelato drowned in espresso.</p>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-slate-200" style={{}}>
<iconify-icon icon="solar:donut-bitten-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">Snacks &amp; Desserts</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Butter Croissant</h4>
<span className="font-medium text-slate-900" style={{}}>₹180</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Flaky, buttery, freshly baked.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Almond Biscotti</h4>
<span className="font-medium text-slate-900" style={{}}>₹90</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Double baked crunchy biscuits (2 pcs).</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Cheesecake Slice</h4>
<span className="font-medium text-slate-900" style={{}}>₹320</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Classic New York style with berry compote.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium transition-colors group-hover:text-cyan-800 text-slate-900" style={{}}>Pesto Chicken Sandwich</h4>
<span className="font-medium text-slate-900" style={{}}>₹290</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Sourdough bread, basil pesto, grilled chicken.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-white border-slate-100" id="reviews" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-medium tracking-tight mb-4">How was your brew?</h2>
<p className="text-slate-500 mb-8" style={{}}>We value your feedback. Let us know about your experience.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide" style={{}}>Name</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-shadow bg-slate-50 border-slate-200" placeholder="John Doe" style={{}} type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide" style={{}}>Email</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-shadow bg-slate-50 border-slate-200" placeholder="john@example.com" style={{}} type="email"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide" style={{}}>Rating</label>

<div className="flex gap-4">
<label className="cursor-pointer group">
<input className="peer sr-only" name="rating" type="radio"/>
<div className="px-4 py-2 border rounded-md text-sm peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all border-slate-200 hover:bg-slate-50" style={{}}>5 ★</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="rating" type="radio"/>
<div className="px-4 py-2 border rounded-md text-sm peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all border-slate-200 hover:bg-slate-50" style={{}}>4 ★</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="rating" type="radio"/>
<div className="px-4 py-2 border rounded-md text-sm peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all border-slate-200 hover:bg-slate-50" style={{}}>3 ★</div>
</label>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide" style={{}}>Message</label>
<textarea className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-shadow resize-none bg-slate-50 border-slate-200" placeholder="Tell us what you liked..." rows="4" style={{}}></textarea>
</div>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border rounded peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-colors border-slate-300 bg-white" style={{}}></div>
<iconify-icon className="absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity text-white" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-500 group-hover:text-slate-700" style={{}}>Subscribe to our coffee newsletter</span>
</label>
<button className="px-6 py-3 font-medium rounded-lg transition-colors w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800" style={{}} type="button">
                            Submit Review
                        </button>
</form>
</div>

<div className="space-y-6">
<h3 className="text-xl font-medium mb-6">Recent whispers</h3>
<div className="p-6 rounded-xl border bg-slate-50 border-slate-100" style={{}}>
<div className="flex gap-1 mb-3 text-cyan-900" style={{}}>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mb-4 leading-relaxed text-slate-600" style={{}}>"The Cold Brew here is legitimately the best I've had in Bangalore. The atmosphere is perfect for getting work done."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-slate-200" style={{}}>AR</div>
<span className="text-sm font-medium text-slate-900" style={{}}>Arjun R.</span>
</div>
</div>
<div className="p-6 rounded-xl border bg-slate-50 border-slate-100" style={{}}>
<div className="flex gap-1 mb-3 text-cyan-900" style={{}}>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="mb-4 leading-relaxed text-slate-600" style={{}}>"Lovely place. The Hazelnut Latte is a must-try. Prices are reasonable for the premium quality you get."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-slate-200" style={{}}>SM</div>
<span className="text-sm font-medium text-slate-900" style={{}}>Sneha M.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 bg-slate-900 text-slate-400" id="contact" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<a className="text-xl font-medium tracking-tighter flex items-center gap-2 text-white" href="#">
<div className="w-6 h-6 rounded flex items-center justify-center bg-white text-slate-900" style={{}}>
<span className="font-bold text-sm">S</span>
</div>
                        SIP &amp; SOUL
                    </a>
<p className="text-sm leading-relaxed max-w-xs">
                        Serving the finest Indian coffee with love and precision. Come for the coffee, stay for the vibes.
                    </p>
<div className="flex gap-4 pt-2">
<a className="transition-colors hover:text-white" href="#" style={{}}><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#" style={{}}><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#" style={{}}><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="space-y-4">
<h4 className="font-medium text-white">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>12, Green Park Road,Indiranagar, Bangalore - 560038</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
<span>+91 98765 43210</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
<span>hello@sipandsoul.com</span>
</li>
</ul>
</div>

<div className="space-y-4">
<h4 className="font-medium text-white">Opening Hours</h4>
<ul className="space-y-3 text-sm">
<li className="flex justify-between max-w-[200px]">
<span>Mon - Fri</span>
<span className="text-white">8:00 AM - 10:00 PM</span>
</li>
<li className="flex justify-between max-w-[200px]">
<span>Sat - Sun</span>
<span className="text-white">9:00 AM - 11:00 PM</span>
</li>
</ul>
</div>

<div className="h-48 rounded-xl overflow-hidden relative group bg-slate-800" style={{}}>
<iframe allowfullscreen="" className="opacity-60 group-hover:opacity-100 transition-opacity duration-500" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003613617462!2d77.639!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzgnMjAuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) invert(90%) contrast(80%)'}} width="100%">
</iframe>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:hidden">
<span className="px-3 py-1 backdrop-blur text-xs rounded-full bg-slate-900/80 text-white" style={{}}>View Map</span>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-slate-800 text-slate-600" style={{}}>
<p>© 2024 Sip &amp; Soul Coffee House. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-slate-400" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
