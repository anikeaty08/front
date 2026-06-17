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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:paint-roller-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-neutral-900 tracking-tight leading-none group-hover:text-indigo-600 transition-colors">Steve Harling</span>
<span className="text-[10px] uppercase tracking-wider font-medium text-neutral-500">Decorating</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#brands">Brands</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#gallery">Gallery</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="tel:07966185273">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    07966 185273
                </a>
<a className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#contact">
                    Contact Us
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-6">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-wide">Established 1987</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-neutral-900 tracking-tight mb-6 leading-[1.1]">
                    High quality painting <br/>
<span className="text-neutral-400">and decorating services.</span>
</h1>
<p className="text-lg text-neutral-600 mb-8 max-w-xl leading-relaxed font-light">
                    Professional commercial and domestic decorating covering Longridge, Preston, the Ribble Valley, and Fylde areas.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-6 py-3 bg-neutral-900 text-white text-sm font-semibold rounded-lg hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-200 flex justify-center items-center gap-2" href="#contact">
                        Get a Free Quote
                        <iconify-icon icon="solar:clipboard-check-linear" width="16"></iconify-icon>
</a>
<a className="px-6 py-3 bg-white text-neutral-700 border border-neutral-200 text-sm font-semibold rounded-lg hover:bg-neutral-50 transition-all flex justify-center items-center gap-2" href="#about">
                        Read Our Story
                    </a>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-40">
<div className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
<div className="absolute top-20 right-40 w-[600px] h-[600px] bg-neutral-100 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
</div>
</section>

<div className="bg-neutral-50 border-y border-neutral-100 py-3">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-2 text-xs font-medium text-neutral-500">
<iconify-icon className="text-blue-600" icon="solar:shield-check-linear" width="16"></iconify-icon>
            COVID-19 Safe Working Practices in Place &amp; Enhanced DBS Checked
        </div>
</div>

<section className="py-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="space-y-6">
<h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">Craftsmanship backed by <br/><span className="text-neutral-400">decades of experience.</span></h2>
<div className="prose prose-neutral text-sm leading-relaxed text-neutral-600">
<p>
                            Steve Harling Decorating was established in 1987. We are a professional painting and decorating service covering the Ribble Valley and Preston / Fylde areas. We work in the commercial and domestic sectors to a very high standard of workmanship, continuing to build on a well-respected reputation for quality work and customer service.
                        </p>
<p>
                            With customer service paramount, backed up by a solid work ethos and efficient health and safety practices, we undertake a wide range of projects, making us your first choice for your painting and decorating needs.
                        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
<div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-3 text-indigo-600">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 text-sm mb-1">Dust Free Sanding</h3>
<p className="text-xs text-neutral-500">Utilizing Mirka and Festool dust-free equipment with full extraction to minimize mess.</p>
</div>
<div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-3 text-indigo-600">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 text-sm mb-1">Flexible Scheduling</h3>
<p className="text-xs text-neutral-500">We plan around your life. If that means working nights in commercial areas, we can be flexible.</p>
</div>
<div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-3 text-indigo-600">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 text-sm mb-1">PDA Members</h3>
<p className="text-xs text-neutral-500">Bound by the Painting and Decorating Association code of practice. Fully insured.</p>
</div>
<div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-3 text-indigo-600">
<iconify-icon icon="solar:shield-user-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 text-sm mb-1">DBS Checked</h3>
<p className="text-xs text-neutral-500">Enhanced DBS certificate for working in areas with vulnerable groups.</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 shadow-xl border border-neutral-100">

<img alt="Professional Decorating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-neutral-100 max-w-xs">
<div className="flex items-center gap-4 mb-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-100 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-300 border-2 border-white"></div>
</div>
<span className="text-xs font-semibold text-neutral-900">Highly Rated</span>
</div>
<p className="text-xs text-neutral-500 italic">"Well respected reputation for quality work and customer service."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">Our Services</h2>
<p className="text-neutral-500 mt-2">Comprehensive decorating solutions for any requirement.</p>
</div>
<a className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1" href="#contact">
                    Request a consultation
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2">Domestic &amp; Commercial</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Interior and exterior painting for homes, offices, and commercial spaces.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallpaper-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2">Wallpaper Hanging</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Expert installation of wallpaper, including wide vinyls and specialized coverings.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:palette-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2">Specialist Finishes</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Hand painted kitchens, murals, broken colour effects, and coving installation.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:roller-brush-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2">Preparation &amp; Repair</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Meticulous preparation using dust-free technology to ensure a perfect finish.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="brands">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-10">We use and recommend premium brands</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-lg font-bold font-serif text-neutral-800">Crown</div>
<div className="text-lg font-bold font-serif text-neutral-800">Little Greene</div>
<div className="text-lg font-bold font-serif text-neutral-800">Zoffany</div>
<div className="text-lg font-bold font-serif text-neutral-800">Benjamin Moore</div>
<div className="text-lg font-bold font-serif text-neutral-800">Farrow &amp; Ball</div>
<div className="text-lg font-bold font-serif text-neutral-800">Dulux Trade</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mt-8 justify-center max-w-3xl mx-auto">
<div className="text-lg font-bold text-neutral-800">Festool</div>
<div className="text-lg font-bold text-neutral-800">Mirka</div>
<div className="text-lg font-bold font-serif text-neutral-800">Sanderson</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight">Recent Projects</h2>
<p className="text-neutral-400 mt-2 text-sm">A glimpse into our standard of work.</p>
</div>
<a className="px-4 py-2 border border-neutral-700 hover:bg-neutral-800 rounded-lg text-xs font-medium transition-colors" href="#contact">
                    Start Your Project
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-neutral-800">
<img alt="Interior work" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-neutral-900/80 to-transparent">
<span className="text-xs font-medium text-neutral-300">Interior</span>
<span className="text-sm font-semibold">Living Spaces</span>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-neutral-800">
<img alt="Detail work" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-neutral-900/80 to-transparent">
<span className="text-xs font-medium text-neutral-300">Detailing</span>
<span className="text-sm font-semibold">Color Selection</span>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-neutral-800">
<img alt="Finish work" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-neutral-900/80 to-transparent">
<span className="text-xs font-medium text-neutral-300">Finishing</span>
<span className="text-sm font-semibold">Perfect Edges</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-neutral-50 rounded-3xl p-8 lg:p-16 border border-neutral-100">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-6">Get in touch</h2>
<p className="text-neutral-600 mb-8">Ready to transform your space? Contact us for a free quote or to discuss your project requirements.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shrink-0">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-neutral-900">Address</h4>
<p className="text-sm text-neutral-500 mt-1">28 Water Meadows, Longridge,<br/>Preston, PR3 3BW</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shrink-0">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-neutral-900">Phone</h4>
<p className="text-sm text-neutral-500 mt-1">
<a className="hover:text-indigo-600" href="tel:01772785090">01772 785090</a><br/>
<a className="hover:text-indigo-600" href="tel:07966185273">07966 185273</a>
</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shrink-0">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-neutral-900">Email</h4>
<p className="text-sm text-neutral-500 mt-1">
<a className="hover:text-indigo-600" href="mailto:steharling@gmail.com">steharling@gmail.com</a>
</p>
</div>
</div>
</div>
<div className="mt-10 flex gap-4">
<a className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center hover:bg-indigo-500 transition-colors" href="http://www.twitter.com/harling_steve" target="_blank">
<iconify-icon icon="line-md:twitter-x"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center hover:bg-cyan-600 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
</div>
</div>
<form className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700">First Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 text-sm transition-all" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 text-sm transition-all" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 text-sm transition-all" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700">Phone</label>
<input className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 text-sm transition-all" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 text-sm transition-all" rows="4"></textarea>
</div>
<button className="w-full py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>
<footer className="bg-white border-t border-neutral-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-200 rounded flex items-center justify-center text-neutral-600">
<iconify-icon icon="solar:paint-roller-bold" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold text-neutral-900">Steve Harling Decorating</span>
</div>
<div className="text-xs text-neutral-500">
                © 2024 Steve Harling Decorating. All rights reserved. <a className="hover:text-neutral-900 underline ml-2" href="#">Privacy Policy</a>
</div>
</div>
</footer>

    </>
  );
}
