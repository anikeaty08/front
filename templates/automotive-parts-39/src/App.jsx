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



        // Simple script to toggle mobile menu
        const btn = document.querySelector('[data-collapse-toggle]');
        const menu = document.getElementById('navbar-sticky');
        
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-blue-950 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="self-center text-xl font-semibold whitespace-nowrap text-slate-900 tracking-tight group-hover:opacity-80 transition-opacity">Z-PARTS<span className="text-blue-600">.</span></span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-blue-900/20 hidden md:block" type="button">
                    Get a Quote
                </button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a aria-current="page" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" href="#">Home</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 transition-colors" href="#about">About</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 transition-colors" href="#products">Products</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 transition-colors" href="#logistics">Logistics</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 transition-colors" href="#contact">Contact</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

<div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-40 right-10 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Authorized Distributor
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.1]">
                        Reliable Parts.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Global Reach.</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                        We specialize in the export and distribution of genuine and OEM spare parts for Korean and Chinese vehicles. Powering businesses worldwide.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center px-8 py-3.5 text-base font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#products">
                            Browse Catalog
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center px-8 py-3.5 text-base font-medium text-slate-900 bg-white border border-slate-200 rounded-full hover:bg-slate-50 focus:ring-4 focus:ring-slate-100 transition-all" href="#contact">
                            Contact Sales
                        </a>
</div>

<div className="pt-8 flex items-center gap-8 border-t border-slate-100">
<div className="flex flex-col">
<span className="text-2xl font-bold text-slate-900 tracking-tight">15+</span>
<span className="text-sm text-slate-500">Years Experience</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-bold text-slate-900 tracking-tight">50+</span>
<span className="text-sm text-slate-500">Countries Served</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-bold text-slate-900 tracking-tight">10k+</span>
<span className="text-sm text-slate-500">SKUs Available</span>
</div>
</div>
</div>
<div className="lg:w-1/2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl transform rotate-3"></div>
<img alt="Automotive Parts Warehouse" className="relative rounded-2xl shadow-2xl border border-slate-100 w-full object-cover h-[500px] lg:h-[600px] grayscale-[0.2] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden lg:block">
<div className="flex items-start gap-4">
<div className="p-3 bg-blue-50 rounded-lg text-blue-600">
<iconify-icon icon="lucide:package-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Genuine Quality</h4>
<p className="text-xs text-slate-500 mt-1">100% verified OEM parts ensuring vehicle longevity and safety.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex justify-center items-center text-xl font-bold tracking-tighter text-slate-800">HYUNDAI</div>
<div className="flex justify-center items-center text-xl font-bold tracking-tighter text-slate-800">KIA MOTORS</div>
<div className="flex justify-center items-center text-xl font-bold tracking-tighter text-slate-800">MOBIS</div>
<div className="flex justify-center items-center text-xl font-bold tracking-tighter text-slate-800">CHERY</div>
<div className="flex justify-center items-center text-xl font-bold tracking-tighter text-slate-800">GEELY</div>
<div className="flex justify-center items-center text-xl font-bold tracking-tighter text-slate-800">MG</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Engine Parts" className="rounded-2xl shadow-lg h-64 w-full object-cover translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Mechanic" className="rounded-2xl shadow-lg h-64 w-full object-cover" src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-slate-50 rounded-3xl"></div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-blue-600 font-medium tracking-wide text-sm uppercase mb-3">About Z-Parts</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Bridging the gap between manufacturers and global markets.</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Established with a vision to streamline the automotive supply chain, Z-Parts has grown into a premier trading house for Asian vehicle components. We connect garages, wholesalers, and retailers with high-quality parts from Korea and China.
                    </p>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Our strategic warehousing and logistics network allows us to ship efficiently to over 50 countries, ensuring that your business never faces downtime due to parts unavailability.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-slate-700 font-medium">Direct sourcing from OEM factories</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-slate-700 font-medium">Rigorous quality control inspection</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-slate-700 font-medium">Dedicated B2B account support</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Comprehensive Product Portfolio</h2>
<p className="text-slate-500">From engine components to body kits, we cover the full spectrum of spare parts for leading Asian automotive brands.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60 flex flex-col items-start">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:settings" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Korean Vehicle Parts</h3>
<p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">Specialized components for Hyundai, Kia, and Genesis. We stock both genuine MOBIS parts and high-grade OEM alternatives.</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6 w-full">
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Engine Parts</span> <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon></li>
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Suspension</span> <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon></li>
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Electronics</span> <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon></li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60 flex flex-col items-start">
<div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:car" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Chinese Vehicle Parts</h3>
<p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">Extensive inventory for growing brands like MG, Geely, Chery, and Haval. Ensuring fitment and durability.</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6 w-full">
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Body Panels</span> <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon></li>
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Transmission</span> <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon></li>
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Lighting</span> <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon></li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60 flex flex-col items-start">
<div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:wrench" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Aftermarket &amp; Accessories</h3>
<p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">Cost-effective solutions without compromising safety. Filters, brake pads, lubricants, and performance upgrades.</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6 w-full">
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Brake Systems</span> <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon></li>
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Filtration</span> <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon></li>
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Batteries</span> <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon></li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Why Global Dealers Trust Z-Parts</h2>
<p className="text-slate-500 mb-8 text-lg">We don't just sell parts; we provide supply chain certainty. Our automated inventory systems and expert team ensure you get the right part, on time.</p>
<a className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700" href="#contact">
                        Become a Partner
                        <iconify-icon className="ml-2" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-blue-900 mb-4" icon="lucide:shield-check" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Authenticity Guaranteed</h4>
<p className="text-sm text-slate-500">Rigorous vetting of all suppliers and products.</p>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-blue-900 mb-4" icon="lucide:globe-2" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Worldwide Logistics</h4>
<p className="text-sm text-slate-500">Air, Sea, and Land freight options tailored to you.</p>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-blue-900 mb-4" icon="lucide:zap" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Fast Order Processing</h4>
<p className="text-sm text-slate-500">95% of orders dispatched within 24 hours.</p>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-blue-900 mb-4" icon="lucide:headphones" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Technical Support</h4>
<p className="text-sm text-slate-500">Expert assistance to identify the correct part numbers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-950 text-white relative overflow-hidden" id="logistics">

<div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 skew-x-12"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Seamless Logistics &amp; Distribution</h2>
<p className="text-blue-200 max-w-2xl">From our central warehouse to your doorstep, we manage the entire supply chain with precision.</p>
</div>
<div className="grid md:grid-cols-4 gap-8">
<div className="relative">
<div className="text-6xl font-bold text-blue-900/50 absolute -top-8 -left-4 z-0">01</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold mb-3">Procurement</h3>
<p className="text-blue-200 text-sm leading-relaxed">Sourcing directly from manufacturers to ensure competitive pricing and availability.</p>
</div>
</div>
<div className="relative">
<div className="text-6xl font-bold text-blue-900/50 absolute -top-8 -left-4 z-0">02</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold mb-3">Warehousing</h3>
<p className="text-blue-200 text-sm leading-relaxed">Climate-controlled storage facilities protecting sensitive electronics and materials.</p>
</div>
</div>
<div className="relative">
<div className="text-6xl font-bold text-blue-900/50 absolute -top-8 -left-4 z-0">03</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold mb-3">Packing</h3>
<p className="text-blue-200 text-sm leading-relaxed">Industrial-grade packaging to prevent damage during long-haul transit.</p>
</div>
</div>
<div className="relative">
<div className="text-6xl font-bold text-blue-900/50 absolute -top-8 -left-4 z-0">04</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold mb-3">Shipping</h3>
<p className="text-blue-200 text-sm leading-relaxed">Partnering with DHL, Maersk, and FedEx for reliable global delivery.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight text-center mb-16">Client Success Stories</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="flex text-orange-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"Z-Parts has been our primary supplier for Kia parts for 3 years. The shipping speed to Dubai is unmatched."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">AS</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Ahmed Saeed</h4>
<p className="text-xs text-slate-500">Auto Center Manager, UAE</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="flex text-orange-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"Hard to find reliable MG parts suppliers, but this team delivers quality every time. Very professional packing."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">JR</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">John Reynolds</h4>
<p className="text-xs text-slate-500">Import Director, UK</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="flex text-orange-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star-half" width="18"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"Excellent communication and transparency regarding stock levels. Highly recommended for B2B trade."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">MK</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Min-ji Kim</h4>
<p className="text-xs text-slate-500">Logistics Coordinator, South Korea</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
<div className="lg:w-5/12 p-10 lg:p-16 text-white bg-blue-900 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-800/50 mix-blend-overlay"></div>
<div className="relative z-10">
<h3 className="text-3xl font-semibold mb-6 tracking-tight">Let's Talk Business</h3>
<p className="text-blue-100 mb-10">Looking for a specific part or need a bulk quotation? Fill out the form or contact us directly.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-blue-200 uppercase font-semibold">Phone</p>
<p className="font-medium">+1 (555) 123-4567</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-blue-200 uppercase font-semibold">Email</p>
<p className="font-medium">sales@z-parts-global.com</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-blue-200 uppercase font-semibold">Headquarters</p>
<p className="font-medium">Business Bay, Dubai, UAE</p>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-blue-800">
<button className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-medium transition-colors w-full justify-center lg:w-auto">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
                                Chat on WhatsApp
                            </button>
</div>
</div>
</div>
<div className="lg:w-7/12 bg-white p-10 lg:p-16">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="Auto Parts Co." type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Inquiry Details</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="Tell us about the parts you need..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-blue-950 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900 tracking-tight">Z-PARTS.</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
                        Your trusted partner for premium automotive spare parts. Connecting global markets with quality Korean and Chinese components.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Products</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Korean Parts</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Chinese Parts</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Lubricants</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Batteries</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Logistics</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2024 Z-Parts Global Trading. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
