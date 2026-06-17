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


document.write(new Date().getFullYear())


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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-bold text-lg">A</span>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">Akshar Traders</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#home">Overview</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#products">Materials</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#gallery">Stock</a>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900 hover:shadow-md" href="#contact">
                Contact Now
                <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<button className="md:hidden p-2 text-slate-900">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden hero-pattern" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Live Metal Rates Available via Phone
            </div>
<h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
                Industrial Scrap Trading <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-slate-600">Simplified.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                The most trusted partner in Dared, Jamnagar for buying and selling ferrous and non-ferrous industrial waste. Fair valuation, instant payment.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200" href="tel:+919426946933">
<i className="w-4 h-4" data-lucide="phone-call"></i>
                    Call +91 94269 46933
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-medium rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm" href="#products">
                    View Material List
                </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-slate-200/60 max-w-4xl mx-auto">
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">15+</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Years Experience</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">100%</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Payment Success</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">24h</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Pickup Service</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">Pan-India</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Logistics</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-200" id="products">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Industrial Materials</h2>
<p className="text-slate-500 max-w-lg">We deal in a wide variety of scrap materials. Whether you are buying for recycling or selling waste, we offer the best market rates.</p>
</div>
<a className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1 group" href="#contact">
                    Get a quote
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300">
<div className="h-48 overflow-hidden bg-slate-200 relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>

<img alt="Iron Scrap" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1569091791842-7cf964654585?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Heavy Melting Iron</h3>
<p className="text-sm text-slate-500 mb-4">Industrial machinery parts, structural steel, and heavy iron waste.</p>
<ul className="text-xs text-slate-500 space-y-2 border-t border-slate-100 pt-4">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Cast Iron</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>MS Scrap</li>
</ul>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300">
<div className="h-48 overflow-hidden bg-slate-200 relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>

<img alt="Copper Wire" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1617713012926-291771d9d592?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Copper &amp; Brass</h3>
<p className="text-sm text-slate-500 mb-4">High-value non-ferrous metals including wire, cable strippings and fixtures.</p>
<ul className="text-xs text-slate-500 space-y-2 border-t border-slate-100 pt-4">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>Armature Wire</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>Honey Brass</li>
</ul>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300">
<div className="h-48 overflow-hidden bg-slate-200 relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>

<img alt="Aluminium" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550478028-21e17d7b320d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Aluminum Scrap</h3>
<p className="text-sm text-slate-500 mb-4">Extrusions, beverage cans, old rolled aluminum and castings.</p>
<ul className="text-xs text-slate-500 space-y-2 border-t border-slate-100 pt-4">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>6063 Extrusion</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>Tension Wire</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200">

<img alt="Industrial Scrap Yard" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1503796964332-e25e282e1435?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-slate-100 shadow-lg">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="scale"></i>
</div>
<div>
<h4 className="font-bold text-slate-900">Digital Weighing</h4>
<p className="text-xs text-slate-500">100% Transparency in measurement</p>
</div>
</div>
</div>
</div>
<div className="pl-0 lg:pl-10">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">About Akshar Traders</h2>
<div className="prose prose-slate text-slate-600 mb-8">
<p className="mb-4">
                            Located in the industrial hub of <strong>Dared, Jamnagar</strong>, Akshar Traders is a leading name in the scrap recycling industry. Under the guidance of <strong>Jayesh Sorathiya</strong>, we have built a reputation for integrity and efficiency.
                        </p>
<p>
                            We specialize in the collection, processing, and trading of metal scraps from industrial units. Our streamlined process ensures that factories can clear their waste efficiently while receiving the best competitive value.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-white rounded-xl border border-slate-200">
<i className="w-6 h-6 text-green-600 mb-3 stroke-[1.5]" data-lucide="shield-check"></i>
<h3 className="font-semibold text-slate-900 text-sm">Legal Compliance</h3>
<p className="text-xs text-slate-500 mt-1">Fully licensed and compliant with Gujarat pollution control norms.</p>
</div>
<div className="p-4 bg-white rounded-xl border border-slate-200">
<i className="w-6 h-6 text-blue-600 mb-3 stroke-[1.5]" data-lucide="truck"></i>
<h3 className="font-semibold text-slate-900 text-sm">Own Logistics</h3>
<p className="text-xs text-slate-500 mt-1">Fleet of vehicles for quick pickup and material transport.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden" id="process">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold tracking-tight mb-4">Trading Process</h2>
<p className="text-slate-400">Streamlined workflow from inquiry to payment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative group">
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<i className="w-5 h-5 text-white" data-lucide="phone"></i>
</div>
<h3 className="text-lg font-semibold mb-2">1. Inquiry</h3>
<p className="text-sm text-slate-400 leading-relaxed">Contact us via phone or visit our yard in Dared. Share details of your scrap material.</p>

<div className="hidden md:block absolute top-6 left-12 right-0 h-px bg-slate-800 -z-10"></div>
</div>

<div className="relative group">
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<i className="w-5 h-5 text-white" data-lucide="search"></i>
</div>
<h3 className="text-lg font-semibold mb-2">2. Valuation</h3>
<p className="text-sm text-slate-400 leading-relaxed">Our experts inspect the quality and offer the current market spot price.</p>
<div className="hidden md:block absolute top-6 left-12 right-0 h-px bg-slate-800 -z-10"></div>
</div>

<div className="relative group">
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<i className="w-5 h-5 text-white" data-lucide="weight"></i>
</div>
<h3 className="text-lg font-semibold mb-2">3. Weighing</h3>
<p className="text-sm text-slate-400 leading-relaxed">Material is weighed on computerized bridge scales for 100% accuracy.</p>
<div className="hidden md:block absolute top-6 left-12 right-0 h-px bg-slate-800 -z-10"></div>
</div>

<div className="relative group">
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<i className="w-5 h-5 text-white" data-lucide="indian-rupee"></i>
</div>
<h3 className="text-lg font-semibold mb-2">4. Payment</h3>
<p className="text-sm text-slate-400 leading-relaxed">Instant payment via RTGS/NEFT or Cash as per government regulations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="gallery">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Inventory Gallery</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="aspect-square rounded-xl overflow-hidden bg-slate-100 relative group">
<img alt="Scrap Metal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1518709414768-a8c79b820887?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-white text-xs font-medium border border-white/50 px-3 py-1 rounded-full backdrop-blur-sm">Steel Piles</span>
</div>
</div>

<div className="aspect-square rounded-xl overflow-hidden bg-slate-100 relative group">
<img alt="Industrial Pipes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-white text-xs font-medium border border-white/50 px-3 py-1 rounded-full backdrop-blur-sm">Pipes</span>
</div>
</div>

<div className="aspect-square rounded-xl overflow-hidden bg-slate-100 relative group">
<img alt="Wires" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1622340243405-b77da2011116?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-white text-xs font-medium border border-white/50 px-3 py-1 rounded-full backdrop-blur-sm">Cables</span>
</div>
</div>

<div className="aspect-square rounded-xl overflow-hidden bg-slate-100 relative group">
<img alt="Machine Parts" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1533246727289-43c2c5890250?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-white text-xs font-medium border border-white/50 px-3 py-1 rounded-full backdrop-blur-sm">Machinery</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="contact">
<div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden flex flex-col md:flex-row">
<div className="p-10 md:w-1/2 bg-slate-50 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
<h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Visit Our Yard</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-slate-600" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Location</h4>
<p className="text-slate-500 text-sm mt-1">Dared Industrial Area,<br/>Jamnagar, Gujarat - 361004</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-slate-600" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Direct Contact</h4>
<p className="text-slate-500 text-sm mt-1">Jayesh Sorathiya<br/>+91 94269 46933</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-slate-600" data-lucide="mail"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Email</h4>
<p className="text-slate-500 text-sm mt-1">jayeshpatel2018@gmail.com</p>
</div>
</div>
</div>
</div>
<div className="p-10 md:w-1/2">
<h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Request Quote</h2>
<p className="text-slate-500 text-sm mb-6">Fill the form below for scrap valuation.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all text-sm placeholder:text-slate-400" placeholder="Your Name" type="text"/>
<input className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all text-sm placeholder:text-slate-400" placeholder="Phone Number" type="tel"/>
</div>
<select className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all text-sm text-slate-600">
<option disabled="" selected="" value="">Select Material Type</option>
<option>Iron / Heavy Scrap</option>
<option>Copper / Brass</option>
<option>Aluminum</option>
<option>Industrial Plant</option>
<option>Others</option>
</select>
<textarea className="w-full h-32 px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all text-sm placeholder:text-slate-400 resize-none" placeholder="Describe approximate quantity and location..."></textarea>
<button className="w-full h-11 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
                        Send Inquiry
                        <i className="w-4 h-4" data-lucide="send"></i>
</button>
</form>
</div>
</div>
</section>
<footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<div className="flex items-center gap-2 mb-8">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-bold text-lg">A</span>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900">Akshar Traders</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500 mb-8">
<a className="hover:text-slate-900 transition-colors" href="#home">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#products">Products</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="text-center text-slate-400 text-xs border-t border-slate-100 w-full pt-8">
<p>©  Akshar Traders. Dared, Jamnagar. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
